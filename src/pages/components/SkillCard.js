import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={styles.buttonSkills}>
      <Text style={styles.textSkills}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkills: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
