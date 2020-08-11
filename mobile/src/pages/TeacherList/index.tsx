import React, { useState } from 'react';
import { View , ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherList() {
    const [ isFiltersViseble, setIsFilterVisible ] = useState(false);

    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function onPressFilter() {
        setIsFilterVisible(!isFiltersViseble)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoredTeachers = JSON.parse(response);
                const favoredTeacherIds = favoredTeachers.map((teacher: Teacher) => { return teacher.id });
                setFavorites(favoredTeacherIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    async function handleFilterSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        });

        setIsFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
            title='Proffys disponíveis' 
            headerRight={(
                <BorderlessButton onPress={onPressFilter} style={styles.filterButton}>
                    <Feather name="filter" size={20} color={'#fff'} />
                </BorderlessButton>
            )} >
                { isFiltersViseble && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            value={subject} 
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor= '#c1bccc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input} 
                                    value={week_day} 
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input} 
                                    value={time} 
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual a hora?"
                                    placeholderTextColor= '#c1bccc'
                                />
                            </View>

                        </View>

                        <RectButton 
                            style={styles.submitButton}
                            onPress={handleFilterSubmit}
                            >
                            <Text style={styles.submitButtonText}>Buscar</Text>
                        </RectButton>

                    </View>
                )}
                
            </PageHeader>
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal:16, paddingBottom: 24}}
                >
                { 
                    teachers.map(( teacher: Teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher}  
                                favored={favorites.includes(teacher.id)}
                            />
                        ) 
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TeacherList;