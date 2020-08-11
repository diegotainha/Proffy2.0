import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoredTeachers = JSON.parse(response);
                setFavorites(favoredTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites()
    });

    return (
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis' />
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal:16, paddingBottom: 24}}>
                {
                    favorites.map(( teacher: Teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher}  
                                favored
                            />
                        ) 
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Favorites;