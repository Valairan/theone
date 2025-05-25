import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  content: {
    // You can customize this for inner layout
  }
});

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

export default Card;
