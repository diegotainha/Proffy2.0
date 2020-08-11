import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface Teacher {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    id: number; //nao usado
    cost: number;
    subject: string;
    user_id: number //nao usado
}

interface TeacherItemProps {
    teacher: Teacher;
    favored: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favored }) => {
    const [ isFavored, setIsFavored ] = useState(favored);

    function goWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
        // Linking.openURL(`https://wa.me/${teacher.whatsapp}`); // peguei no whatsapp

        api.post('connections', {
            user_id: teacher.id
        })
    }

    async function toggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = [];
            if (favorites) {
                favoritesArray = JSON.parse(favorites);
            }

        if(isFavored) {
            //remover
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavored(false);
        } else {
            //adicionar
            favoritesArray.push(teacher);
            setIsFavored(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>

                <Image 
                    style={styles.avatar} 
                    source={ {uri:  teacher.avatar  } } 
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{ teacher.name }</Text>
                    <Text style={styles.subject}>{ teacher.subject }</Text>
                </View>

            </View>
                
            <Text style={styles.bio}>{ teacher.bio }
            </Text>
            
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ { teacher.cost }</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={toggleFavorite}
                        style={[
                            styles.favoriteButton, 
                            isFavored ? styles.favored : {}
                        ]}>
                        { 
                            isFavored 
                            ? <Image source={unfavoriteIcon} /> 
                            : <Image source={heartIcon} />
                        }
                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={goWhatsApp}>
                        <Image source={whatsapp} />
                        <Text style={styles.contactButtonText}>Entrar em contato.</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}

export default TeacherItem;