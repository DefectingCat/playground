import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

void main(List<String> args) async {
  var url = Uri.https('www.defectink.com', '/atom.xml');

  var respose = await http.get(url);
  if (respose.statusCode == 200) {
    // var data = convert.jsonDecode(respose.body) as Map<String, dynamic>;
    print(respose.body);
  } else {
    print('Error');
  }
}
