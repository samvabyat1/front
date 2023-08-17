// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:front/components.dart';
import 'package:google_fonts/google_fonts.dart';

class Phone extends StatefulWidget {
  const Phone({super.key});

  @override
  State<Phone> createState() => _PhoneState();
}

class _PhoneState extends State<Phone> {
  bool bannerflag = true;
  @override
  Widget build(BuildContext context) {
    var sz = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          Flex(
            direction: sz.aspectRatio > 1 ? Axis.horizontal : Axis.vertical,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                  width: sz.shortestSide * 0.7,
                  child: AspectRatio(
                      aspectRatio: 1,
                      child: SvgPicture.asset(
                          'lib/undraw_progressive_app_m-9-ms.svg'))),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    'Front Share',
                    style: GoogleFonts.montserrat(
                      fontSize: 25,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  SizedBox(
                    height: 25,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      InkWell(
                          onTap: () {
                            showModalBottomSheet(
                              context: context,
                              builder: (context) => UploadSht(
                                sz: sz,
                              ),
                            );
                          },
                          child: FButton(name: 'Send')),
                      SizedBox(
                        width: 10,
                      ),
                      InkWell(
                          onTap: () {
                            showModalBottomSheet(
                              context: context,
                              builder: (context) => DownloadSht(
                                sz: sz,
                              ),
                            );
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
          Visibility(
            visible: bannerflag,
            child: Positioned(
              top: 35,
              child: Container(
                width: sz.width,
                color: Color.fromARGB(255, 202, 224, 246),
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 30, vertical: 20),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                          'Make sure the internet on the\nother device is proper in order to\nuse Front Share.'),
                      InkWell(
                          onTap: () {
                            setState(() {
                              bannerflag = false;
                            });
                          },
                          child: Icon(CupertinoIcons.xmark))
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
