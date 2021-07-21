import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({skill, ...rest}: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkills} {...rest}>
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
