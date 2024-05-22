import React from 'react';
import {styles} from './style';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
const Main = () => {
  const openLink = url => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  const skills = [
    'JavaScript',
    'ExpressJs',
    'MongoDB',
    'ReactJs',
    'NextJs',
    'Redux',
    'NodeJs',
    'React Native',
    'REST API',
    'Material-UI',
    'Tailwind-CSS',
    'Linux',
    'HTML/CSS',
    'BootStrap',
    'Git/GitHub',
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Akash</Text>
        <Text style={styles.subHeading}>(codeguyakash)</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://res.cloudinary.com/techlogdottech/image/upload/v1716279431/nkaovd7mcd0lfe9fbdgv.png',
          }}
        />
        <Text style={styles.description}>
          <Text style={styles.boldText}>Hey, 👋 </Text>
          My name is <Text style={styles.boldText}>Akash</Text>. I have been a
          full-stack web developer since 2020, and I love React. I didn't even
          know what React was when I landed my first job, but once I discovered
          it, I immediately fell in love. Through many hours of studying and
          practice, I was eventually able to learn enough React to comfortably
          build any project I could think of. Now, my passion is sharing that
          knowledge with others. I learned programming both on my own and in
          college.
        </Text>

        <Text style={styles.techStackTitle}>Tech Stack</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>
              {skill}
            </Text>
          ))}
        </View>
        <View style={styles.skillsContainer}>
          <TouchableOpacity onPress={() => openLink('https://codeguyakash.me')}>
            <Text style={styles.social}>Portfolio • </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://github.com/codeguyakash')}>
            <Text style={styles.social}>Github • </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://www.twitter.com/codeguyakash')}>
            <Text style={styles.social}>Twitter • </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink('https://linkedin.com/in/codeguyakash')}>
            <Text style={styles.social}>Linkedin</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.footer}>
            <TouchableOpacity
              onPress={() => openLink('https://www.twitter.com/codeguyakash')}>
              <Text style={styles.social}>2024 © codeguyakash</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Main;
