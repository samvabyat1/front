import 'dart:io' as io;
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/foundation.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'dart:html';

var gsi = GoogleSignIn();
final storageRef = FirebaseStorage.instance.ref();
var user = '';

Future<bool> signing() async {
  try {
    await gsi.signIn();
  } catch (e) {
    print(e);
    return false;
  }
  if (gsi.currentUser != null) {
    var uem = gsi.currentUser!.email;
    window.localStorage['user'] = uem.substring(0, uem.indexOf('@'));
    return true;
  }
  return false;
}

Future<String> getuser() async {
  user = window.localStorage['user'].toString();
  return window.localStorage['user'].toString();
}

