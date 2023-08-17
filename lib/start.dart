// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:front/base.dart';
import 'package:front/main.dart';
import 'package:google_fonts/google_fonts.dart';

class GetStarted extends StatefulWidget {
  const GetStarted({super.key});

  @override
  State<GetStarted> createState() => _GetStartedState();
}

class _GetStartedState extends State<GetStarted> {
  var btnclr = Colors.deepPurpleAccent;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // am();
  }

  void am() async {
    if (await getuser() != 'null') {
      Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => Decider(),
          ));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      children: [
        SizedBox(
          height: double.infinity,
          width: double.infinity,
          child: Image.network(
            'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            fit: BoxFit.cover,
          ),
        ),
        Center(
          child: Container(
            height: double.infinity,
            constraints: BoxConstraints(maxWidth: 1000),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  textAlign: TextAlign.center,
                  'Sharing Among your Devices now made Easy, Reliable and Fast',
                  style: GoogleFonts.montserrat(
                    fontSize: 30,
                    fontWeight: FontWeight.w600,
                    color: Colors.white,
                  ),
                ),
                SizedBox(
                  height: 25,
                ),
                Container(
                  constraints: BoxConstraints(maxWidth: 700),
                  child: RichText(
                      textAlign: TextAlign.center,
                      text: TextSpan(
                          text: '',
                          style: GoogleFonts.montserrat(
                            fontSize: 15,
                            color: Colors.grey,
                          ),
                          children: [
                            TextSpan(
                              text: 'Front Share',
                              style: GoogleFonts.montserrat(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Colors.deepPurpleAccent,
                              ),
                            ),
                            TextSpan(
                                text:
                                    ' now lets you transfer your files among your devices without any hassles and it operates over internet connection, makes it less annoying over bluetooth operated systems which are comparatively slower and often face device connecting issues.')
                          ])),
                ),
                SizedBox(
                  height: 30,
                ),
                InkWell(
                  onTap: () async {
                    // if (await signing()) {
                    //   await getuser();
                    //   Navigator.pushReplacement(
                    //       context,
                    //       MaterialPageRoute(
                    //         builder: (context) => Decider(),
                    //       ));
                    // }
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => Decider(),
                          ));
                  },
                  onHover: (value) {
                    setState(() {
                      btnclr =
                          value ? Colors.blueAccent : Colors.deepPurpleAccent;
                    });
                  },
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(100),
                      color: btnclr,
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: Text(
                        'Sign In with Google',
                        style: GoogleFonts.montserrat(
                            fontSize: 15, color: Colors.white),
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ],
    ));
  }
}
