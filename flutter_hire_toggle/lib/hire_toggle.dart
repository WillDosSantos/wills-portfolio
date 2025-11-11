
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

enum Decision { hire, disqualify }

class HireToggle extends StatefulWidget {
  const HireToggle({
    super.key,
    this.value = Decision.hire,
    required this.onChanged,
    this.width = 360,
    this.height = 56,
  });

  final Decision value;
  final ValueChanged<Decision> onChanged;
  final double width;
  final double height;

  @override
  State<HireToggle> createState() => _HireToggleState();
}

class _HireToggleState extends State<HireToggle> {
  late Decision _value = widget.value;
  bool _focused = false;

  void _set(Decision v) {
    if (_value == v) return;
    HapticFeedback.selectionClick();
    setState(() => _value = v);
    widget.onChanged(v);
  }

  @override
  Widget build(BuildContext context) {
    final isHire = _value == Decision.hire;
    final radius = BorderRadius.circular(widget.height / 2);

    return FocusableActionDetector(
      onShowFocusHighlight: (f) => setState(() => _focused = f),
      shortcuts: <LogicalKeySet, Intent>{
        // left/right arrows and space/enter toggle sides
        LogicalKeySet(LogicalKeyboardKey.space): const ActivateIntent(),
        LogicalKeySet(LogicalKeyboardKey.enter): const ActivateIntent(),
      },
      actions: {
        ActivateIntent: CallbackAction<ActivateIntent>(
          onInvoke: (i) => _set(isHire ? Decision.disqualify : Decision.hire),
        ),
      },
      child: Semantics(
        label: 'Hiring decision',
        value: isHire ? 'Hire Will' : 'Disqualify Will',
        button: true,
        child: Container(
          width: widget.width,
          height: widget.height,
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: radius,
            border: Border.all(color: const Color(0xFFE5E7EB)), // gray-200
            boxShadow: [
              // soft outer shadow like your mock
              BoxShadow(
                color: Colors.black.withOpacity(0.06),
                blurRadius: 30,
                offset: const Offset(0, 10),
              ),
              if (_focused)
                BoxShadow(
                  color: Colors.black.withOpacity(0.08),
                  blurRadius: 6,
                ),
            ],
          ),
          clipBehavior: Clip.antiAlias,
          child: Stack(
            children: [
              // sliding thumb/background
              AnimatedAlign(
                alignment: isHire ? Alignment.centerLeft : Alignment.centerRight,
                duration: const Duration(milliseconds: 200),
                curve: Curves.easeOutCubic,
                child: Container(
                  margin: const EdgeInsets.all(4),
                  width: widget.width / 2 - 8,
                  height: widget.height - 8,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: radius,
                    boxShadow: [
                      BoxShadow(
                        // blue glow when on "Hire"
                        color: isHire
                            ? const Color(0xFF3B82F6).withOpacity(.35) // sky-500
                            : Colors.black.withOpacity(.10),
                        blurRadius: isHire ? 28 : 24,
                        offset: const Offset(0, 10),
                      ),
                      BoxShadow(
                        color: Colors.black.withOpacity(.04),
                        blurRadius: 1,
                      ),
                    ],
                  ),
                ),
              ),

              // two hit areas
              Row(
                children: [
                  Expanded(
                    child: _ChoiceButton(
                      selected: isHire,
                      icon: Icons.check,
                      iconColorSelected: const Color(0xFF3B82F6), // blue-500
                      label: 'Hire Will',
                      labelColorSelected: const Color(0xFF1D4ED8), // blue-700
                      onTap: () => _set(Decision.hire),
                    ),
                  ),
                  Expanded(
                    child: _ChoiceButton(
                      selected: !isHire,
                      icon: Icons.close,
                      iconColorSelected: const Color(0xFF6B7280), // gray-500
                      label: 'Disqualify Will',
                      labelColorSelected: const Color(0xFF374151), // gray-700
                      onTap: () => _set(Decision.disqualify),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ChoiceButton extends StatelessWidget {
  const _ChoiceButton({
    required this.selected,
    required this.icon,
    required this.iconColorSelected,
    required this.label,
    required this.labelColorSelected,
    required this.onTap,
  });

  final bool selected;
  final IconData icon;
  final Color iconColorSelected;
  final String label;
  final Color labelColorSelected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final Color iconColor = selected ? iconColorSelected : const Color(0xFFD1D5DB); // gray-300
    final Color textColor = selected ? labelColorSelected : const Color(0xFFD1D5DB);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        child: Center(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 22, color: iconColor),
              const SizedBox(width: 8),
              Text(
                label,
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 15,
                  color: textColor,
                  letterSpacing: .2,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
