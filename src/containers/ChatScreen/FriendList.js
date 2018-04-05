import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users, pendingUsers } from '../../config/data';

class FriendList extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('PendingProfile', { ...user });
  };
  // TODO : change navigation to chatting room screen
  onChating = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>{'Pending List'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <List containerStyle={{ marginTop: 0}}>
          {pendingUsers.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>{'Friend list'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <List containerStyle={{ marginTop: 0}}>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onChating(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#1976D2'
  },
  separatorText: {
    color: '#1976D2',
    fontWeight: 'bold',
    marginHorizontal: 8
  },
})

export default FriendList;