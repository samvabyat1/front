// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:front/desktop.dart';
import 'package:front/phone.dart';
import 'package:front/start.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    name: 'front',
    options: FirebaseOptions(apiKey: "AIzaSyDLoLL4oRbr0-eR4RKrkMMlh2_Qv-YXTnM", appId: "1:160317437104:web:d2c733dfc438ea2ceef775", messagingSenderId: "160317437104", projectId: "frontq")
  );
  runApp(MaterialApp(
    home: GetStarted(),
    debugShowCheckedModeBanner: false,
  ));
}

class Decider extends StatelessWidget {
  const Decider({super.key});

  @override
  Widget build(BuildContext context) {
    var sz = MediaQuery.of(context).size;
    if (sz.width > 600 && sz.height > 600) return Desktop();
    return Phone();
  }
}

