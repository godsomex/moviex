import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function MovieDetails({route: {params}}) {
  const details = params.item;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{details.title}</Text>
        </View>

        <View style={styles.movieContent}>
          <Text style={styles.movieTitle}>{details.original_title}</Text>

          <Text style={styles.movieDescription}>{details.overview}</Text>

          <Text style={styles.tags}>{details.original_language}</Text>

          <Text style={styles.date}>Release Date: {details.release_date} </Text>

          <View style={styles.movie}>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
              }}
            />
          </View>
          <TouchableOpacity style={styles.likeButton}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  movieContent: {
    flex: 1,
    padding: 30,
  },
  movieTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
  movieDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  tags: {
    color: '#00BFFF',
    marginTop: 10,
  },
  date: {
    color: '#696969',
    marginTop: 10,
  },
  avatar: {
    width: '100%',
    height: 400,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#00BFFF',
  },
  movie: {
    flexDirection: 'row',
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: '#00BFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 10,
  },
  likeButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  likeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
