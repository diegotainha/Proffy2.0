import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';


function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useFocusEffect(() => {
        api.get('connections').then(reponse => {
            const { total } = reponse.data;
            setTotalConnections(total);
        });
    });
    
    const { navigate } = useNavigation();

    function toClassesPage() {
        navigate('GiveClasses');
    }

    function toStudy() {
        navigate('Study');
    }

    return (
        <View style={ styles.container }>
            <Image source={landingImg} style={ styles.banner } />
            <Text style={ styles.title }>
                Seja bem-vindo, {'\n'}
                <Text style={ styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={toStudy}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={toClassesPage}>
                    <Image source={giveClassIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    );
}

export default Landing;