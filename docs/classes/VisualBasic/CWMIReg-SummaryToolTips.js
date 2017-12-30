NDSummary.OnToolTipsLoaded("VisualBasicClass:CWMIReg",{1:"<div class=\"NDToolTip TClass LVisualBasic\"><div id=\"NDPrototype1\" class=\"NDPrototype NoParameterForm\">Class CWMIReg</div><div class=\"TTSummary\">WMI-derived Registry class for VBScript.</div></div>",3:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype3\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function Exists(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The class\'s Exists function uses key or value enumeration to check whether a key or value exists, and also returns the data type for existing values.</div></div>",4:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype4\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function GetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">GetValue returns the the value data, and also works to test the existence of a value.</div></div>",5:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype5\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function EnumKeys(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_,</td></tr><tr><td class=\"PName first last\">AKeys_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns list of sub keys in a key.</div></div>",6:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype6\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function EnumVals(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_,</td></tr><tr><td class=\"PName first last\">AValsOut_,</td></tr><tr><td class=\"PName first last\">ATypesOut_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Return value names and type from a given key.</div></div>",22:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype22\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function SetValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_,</td></tr><tr><td class=\"PName first last\">ValData_,</td></tr><tr><td class=\"PName first last\">TypeIn_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set value data.</div></div>",8:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype8\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function CreateKey(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Create a key or value. Path can have &quot;\\&quot; at end or not (since the function is unambiguous), but must not have &quot;\\&quot; if path is an HKey like &quot;HKLM&quot;.</div></div>",9:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype9\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function Delete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Delete a key (using DeleteKey) or value. Add &quot;\\&quot; for keys.</div></div>",10:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype10\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function TestPath(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">PathIn_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns key level. The Delete function, since it is capable of deleting a key &quot;tree&quot;, has a built-in safety feature. It will return error code -1 (Invalid Path) if the PathIn_ parameter does not contain at least 3 backslashes. That prevents the accidental deletion of the main hive keys and their direct sub keys. In other words, HKCU cannot be deleted. Nor can HKCU\\Software\\.</div></div>",11:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype11\" class=\"NDPrototype NoParameterForm\">Private Sub Class_Initialize()</div></div>",12:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype12\" class=\"NDPrototype NoParameterForm\">Private Sub Class_Terminate()</div></div>",13:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype13\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function GetHKey(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">sKey1_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Assign Registry Root variable with its WMI hex equivalent.</div></div>",14:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype14\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function ConvertType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">TypeIn_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Assign Type variable with its WMI hex equivalent and vice-versa.</div></div>",15:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype15\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Public Function EnumKeysAll(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_,</td></tr><tr><td class=\"PName first last\">AKeys_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Return list of all sub keys in a key. EnumKeysAll has been made public, in case it might be useful, but it was really written for use in deleting keys.</div></div>",16:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Private Function DeleteKey(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">Path_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Deletes all sub keys in path by first calling EnumKeysAll. It then deletes parent key.</div></div>",17:"<div class=\"NDToolTip TFunction LVisualBasic\"><div id=\"NDPrototype17\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Private Function DecimalNumbers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">strHex_</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Convert hex string to binary Array.</div></div>"});