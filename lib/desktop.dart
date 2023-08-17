// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:front/components.dart';
import 'package:google_fonts/google_fonts.dart';

class Desktop extends StatefulWidget {
  const Desktop({super.key});

  @override
  State<Desktop> createState() => _DesktopState();
}

class _DesktopState extends State<Desktop> {
  @override
  Widget build(BuildContext context) {
    var sz = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 1, 39, 77),
      body: Row(
        children: [
          SizedBox(
            height: double.infinity,
            width: sz.width * 0.2,
            child: Padding(
              padding: const EdgeInsets.all(25),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Front Share',
                    style: GoogleFonts.montserrat(
                      fontSize: 30,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(
                    height: 50,
                  ),
                  Container(
                    width: sz.width,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: Color.fromARGB(255, 202, 224, 246),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 30, vertical: 20),
                      child: Text(
                          'Make sure the internet on the other device is proper in order to use Front Share.'),
                    ),
                  ),
                  SizedBox(
                    height: 25,
                  ),
                  Container(
                    width: sz.width,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: Color.fromARGB(255, 202, 224, 246),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 30, vertical: 20),
                      child: Text(
                          'Having multiple files to share? Just select the files and make a zip and upload here.'),
                    ),
                  ),
                  Spacer(),
                  TextButton(
                    onPressed: () {},
                    child: Text(
                      'View project',
                      style: GoogleFonts.poppins(color: Colors.blue),
                    ),
                  )
                ],
              ),
            ),
          ),
          Expanded(
            child: Column(
              children: [
                SizedBox(
                  height: sz.height * 0.1,
                  width: double.infinity,
                  child: Center(
                    child: Text(
                      'FRONT EMBED SERVER',
                      style: GoogleFonts.robotoMono(
                        fontSize: 15,
                        color: Colors.white54,
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius:
                          BorderRadius.only(topLeft: Radius.circular(20)),
                    ),
                    child: Flex(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      direction:
                          sz.aspectRatio > 1 ? Axis.horizontal : Axis.vertical,
                      children: [
                        SizedBox(
                            height: sz.height * 0.6,
                            child: AspectRatio(
                                aspectRatio: 1,
                                child: SvgPicture.asset(
                                    'lib/undraw_progressive_app_m-9-ms.svg'))),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                InkWell(
                                    onTap: () {
                                      showDialog(
                                          context: context,
                                          builder: (context) => Dialog(
                                                child: SizedBox(
                                                    height: sz.height * 0.5,
                                                    width: sz.width * 0.5,
                                                    child: UploadSht(sz: sz)),
                                              ));
                                    },
                                    child: FButton(name: 'Send')),
                                SizedBox(
                                  width: 10,
                                ),
                                InkWell(
                                    onTap: () {
                                      showDialog(
                                          context: context,
                                          builder: (context) => Dialog(
                                                child: SizedBox(
                                                    height: sz.height * 0.5,
                                                    width: sz.width * 0.5,
                                                    child: DownloadSht(sz: sz)),
                                              ));
                                    },
                                    child: FButton(name: 'Recieve')),
                              ],
                            ),
                            SizedBox(
                              height: 25,
                            ),
                            Wrap(
                              crossAxisAlignment: WrapCrossAlignment.center,
                              children: [
                                Icon(
                                  CupertinoIcons.circle,
                                  color: Color(0xff0b57d0),
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                RichText(
                                    text: TextSpan(
                                        style: GoogleFonts.poppins(),
                                        text: 'Using ',
                                        children: [
                                      TextSpan(
                                        text: 'SAMT',
                                        style: GoogleFonts.goldman(
                                          color: Color(0xff0b57d0),
                                          fontWeight: FontWeight.bold,
                                        ),
                                      )
                                    ])),
                              ],
                            )
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
