import React from 'react';
import { AppRegistry,} from 'react-native';
import CodePush from 'react-native-code-push';
import JokesApp from './App/index.js';

let App = CodePush({ updateDialog: true,installMode: CodePush.InstallMode.IMMEDIATE})(JokesApp);

AppRegistry.registerComponent('jokesapp', () => App);
