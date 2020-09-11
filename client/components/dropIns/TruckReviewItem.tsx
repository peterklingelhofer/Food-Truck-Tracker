import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { Avatar, Badge } from 'react-native-elements';
import foodIcons from '../../../assets/mapIcons.js';

const TruckReviewItem = ({ review, currentTruck, currentTruckReviewers }) => {
  const {
    review_date,
    review_description,
    review_photo,
    review_star,
    review_title,
    upvotes,
  } = review;
  const { full_name, badge, profile_photo_url } = currentTruckReviewers;
  let reviewPhoto: string = review_photo || foodIcons.defaultReviewPhoto;
  let profilePhoto: string = profile_photo_url || foodIcons.defaultProfilePhoto;
  let userBadges = badge || '🎖';
  return (
    <View key={review.id} style={styles.container}>
      <View style={styles.reviewHeader}>
        <View style={styles.avatarNameBadge}>
          <Avatar
            rounded
            source={{
              uri: profilePhoto,
            }}
          />
          <Text>{full_name}</Text>
          <Text>{userBadges}</Text>
        </View>
        <Text style={styles.title}>{review_title}</Text>
        <View style={styles.stars}>
          <Text style={{ color: 'orange' }}>
            {String.fromCharCode(9733).repeat(Math.floor(review_star))}
          </Text>
          <Text style={{ color: 'lightgrey' }}>
            {String.fromCharCode(9733).repeat(5 - Math.floor(review_star))}
          </Text>
        </View>
      </View>
      <Text>{JSON.stringify(review_date)}</Text>
      <Text>{review_description}</Text>
      <Text>{`${upvotes} 👍`}</Text>
      <Image
        source={{ uri: reviewPhoto }}
        style={styles.image}
        resizeMode="contain"
      />
      <Divider style={{ backgroundColor: 'blue' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarNameBadge: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewHeader: {
    alignItems: 'center',
    flexShrink: 1,
    flex: 0.8,
  },
  stars: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  truck: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
  message: {
    padding: 20,
  },
});

export default TruckReviewItem;
