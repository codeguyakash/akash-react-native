import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  ListRenderItem,
  Alert,
} from 'react-native';

// Define the shape of the data
interface Blog {
  content: React.ReactNode;
  _id: any;
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://techlog-tech-585621892456.herokuapp.com/api/v1/blogs',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: Blog[] = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const renderItem: ListRenderItem<Blog> = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.content}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blogs</Text>
      <FlatList
        data={data}
        keyExtractor={item => item._id?.toString()}
        renderItem={renderItem}
      />
      <Text style={{textAlign: 'center'}}>@codeguyakash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'justify',
  },
  body: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
  },
});

export default App;
