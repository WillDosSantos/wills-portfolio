import 'package:flutter/material.dart';
import 'hire_toggle.dart';

void main() => runApp(const DemoApp());

class DemoApp extends StatelessWidget {
  const DemoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true),
      home: const Scaffold(
        backgroundColor: Colors.white,
        body: Center(child: DemoScreen()),
      ),
    );
  }
}

class DemoScreen extends StatefulWidget {
  const DemoScreen({super.key});

  @override
  State<DemoScreen> createState() => _DemoScreenState();
}

class _DemoScreenState extends State<DemoScreen> {
  Decision decision = Decision.hire;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        HireToggle(
          value: decision,
          onChanged: (d) => setState(() => decision = d),
        ),
        const SizedBox(height: 16),
        Text(
          decision == Decision.hire ? 'Selected: Hire Will' : 'Selected: Disqualify Will',
          style: const TextStyle(fontWeight: FontWeight.w600),
        ),
      ],
    );
  }
}
