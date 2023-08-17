// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:file_picker/file_picker.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';

class FButton extends StatelessWidget {
  String name;
  bool disabled;
  FButton({super.key, required this.name, this.disabled = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(100),
        color: disabled ? Colors.blueGrey : Color(0xff0b57d0),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Wrap(
          crossAxisAlignment: WrapCrossAlignment.center,
          children: [
            Icon(
                name == 'Send'
                    ? Icons.file_upload_outlined
                    : Icons.file_download_outlined,
                color: Colors.white),
            SizedBox(
              width: 10,
            ),
            Text(
              name,
              style: GoogleFonts.montserrat(fontSize: 15, color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}

class UploadSht extends StatefulWidget {
  var sz;
  UploadSht({super.key, required this.sz});

  @override
  State<UploadSht> createState() => _UploadShtState();
}

class _UploadShtState extends State<UploadSht> {
  var fltxt = '';
  FilePickerResult? picked;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            fltxt == '' ? 'No file chosen' : fltxt,
            style: TextStyle(),
          ),
          IconButton(
              iconSize: widget.sz.shortestSide * 0.3,
              onPressed: () async {
                picked = await FilePicker.platform.pickFiles();

                if (picked != null) {
                  setState(() {
                    fltxt = picked!.files.first.name.toString();
                  });
                } else {
                  setState(() {
                    fltxt = '';
                  });
                }
              },
              icon: Icon(
                CupertinoIcons.folder_fill,
                color: Color(0xff0b57d0),
              )),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              InkWell(
                onTap: fltxt == '' ? null : () {},
                child: FButton(
                  name: 'Send',
                  disabled: fltxt == '' ? true : false,
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}

class DownloadSht extends StatefulWidget {
  var sz;
  DownloadSht({super.key, required this.sz});

  @override
  State<DownloadSht> createState() => _DownloadShtState();
}

class _DownloadShtState extends State<DownloadSht> {
  var fltxt = '';
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Stack(
        children: [
          SizedBox(
            child: SvgPicture.asset('lib/undraw_my_files_swob.svg'),
          ),
          Align(
            alignment: Alignment.topCenter,
            child: Text(
              fltxt == '' ? 'Nothing to recieve' : fltxt,
              style: TextStyle(),
            ),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                InkWell(
                  onTap: fltxt == '' ? null : () {},
                  child: FButton(
                    name: 'Download',
                    disabled: fltxt == '' ? true : false,
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
