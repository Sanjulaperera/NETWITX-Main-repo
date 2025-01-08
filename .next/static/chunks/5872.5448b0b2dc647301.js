"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5872],{45872:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});let n=[Object.freeze(JSON.parse('{"displayName":"ABAP","fileTypes":["abap","ABAP"],"foldingStartMarker":"/\\\\*\\\\*|\\\\{\\\\s*$","foldingStopMarker":"\\\\*\\\\*/|^\\\\s*\\\\}","name":"abap","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.abap"}},"match":"^\\\\*.*\\\\n?","name":"comment.line.full.abap"},{"captures":{"1":{"name":"punctuation.definition.comment.abap"}},"match":"\\".*\\\\n?","name":"comment.line.partial.abap"},{"match":"(?<![^\\\\s])##.*?(?=([\\\\.:,\\\\s]))","name":"comment.line.pragma.abap"},{"match":"(?i)(?<=(?:\\\\s|~|-))(?<=(?:->|=>))([a-z_\\\\/][a-z_0-9\\\\/]*)(?=\\\\s+(?:=|\\\\+=|-=|\\\\*=|\\\\/=|&&=|&=)\\\\s+)","name":"variable.other.abap"},{"match":"\\\\b\\\\d+(\\\\b|\\\\.|,)","name":"constant.numeric.abap"},{"match":"(?i)(^|\\\\s+)((PUBLIC|PRIVATE|PROTECTED)\\\\sSECTION)(?=\\\\s+|:|\\\\.)","name":"storage.modifier.class.abap"},{"begin":"(?<!\\\\\\\\)(\\\\|)(.*?)","beginCaptures":{"1":{"name":"constant.character.escape.abap"}},"end":"(?<!\\\\\\\\)(\\\\||(\\\\\\\\\\\\\\\\\\\\|))","endCaptures":{"1":{"name":"constant.character.escape.abap"}},"name":"string.interpolated.abap","patterns":[{"match":"({ )|( })","name":"constant.character.escape"},{"match":"\\\\\\\\\\\\|","name":"constant.character.escape.abap"},{"match":"(?i)(?<=\\\\s)(align|alpha|case|country|currency|date|decimals|exponent|number|pad|sign|style|time|timestamp|timezone|width|xsd|zero)(?=\\\\s=)","name":"entity.name.property.stringtemplate.abap"},{"match":"(?i)(?<==\\\\s)(center|engineering|environment|in|iso|left|leftplus|leftspace|lower|no|out|raw|right|rightplus|rightspace|scale_preserving|scale_preserving_scientific|scientific|scientific_with_leading_zero|sign_as_postfix|simple|space|upper|user|yes)(?=\\\\s)","name":"entity.value.property.stringtemplate.abap"}]},{"begin":"\'","end":"\'","name":"string.quoted.single.abap","patterns":[{"match":"\'\'","name":"constant.character.escape.abap"}]},{"begin":"`","end":"`","name":"string.quoted.single.abap","patterns":[{"match":"``","name":"constant.character.escape.abap"}]},{"begin":"(?i)^\\\\s*(class)\\\\s([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.block.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","name":"meta.block.begin.implementation.abap","patterns":[{"match":"(?i)(^|\\\\s+)(definition|implementation|public|inheriting\\\\s+from|final|deferred|abstract|shared\\\\s+memory\\\\s+enabled|(global|local)*\\\\s*friends|(create\\\\s+(public|protected|private))|for\\\\s+behavior\\\\s+of|for\\\\s+testing|risk\\\\s+level\\\\s+(critical|dangerous|harmless))|duration\\\\s(short|medium|long)(?=\\\\s+|\\\\.)","name":"storage.modifier.class.abap"},{"begin":"(?=[A-Za-z_][A-Za-z0-9_]*)","contentName":"entity.name.type.block.abap","end":"(?![A-Za-z0-9_])","patterns":[{"include":"#generic_names"}]}]},{"begin":"(?i)^\\\\s*(method)\\\\s(?:([a-z_\\\\/][a-z_0-9\\\\/]*)~)?([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"},"3":{"name":"entity.name.function.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?i)(?<=^|\\\\s)(BY\\\\s+DATABASE(\\\\s+PROCEDURE|\\\\s+FUNCTION|\\\\s+GRAPH\\\\s+WORKSPACE)|BY\\\\s+KERNEL\\\\s+MODULE)(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?i)(?<=^|\\\\s)(FOR\\\\s+(HDB|LLANG))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?i)(?<=\\\\s)(OPTIONS\\\\s+(READ-ONLY|DETERMINISTIC|SUPPRESS\\\\s+SYNTAX\\\\s+ERRORS))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"match":"(?i)(?<=^|\\\\s)(LANGUAGE\\\\s+(SQLSCRIPT|SQL|GRAPH))(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"},{"captures":{"1":{"name":"storage.modifier.method.abap"}},"match":"(?i)(?<=\\\\s)(USING)\\\\s+([a-z_\\\\/][a-z_0-9\\\\/=>]*)+(?=\\\\s+|\\\\.)"},{"begin":"(?=[A-Za-z_][A-Za-z0-9_]*)","end":"(?![A-Za-z0-9_])","patterns":[{"include":"#generic_names"}]}]},{"begin":"(?i)^\\\\s*(INTERFACE)\\\\s([a-z_\\\\/][a-z_0-9\\\\/]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?i)(?<=^|\\\\s)(DEFERRED|PUBLIC)(?=\\\\s+|\\\\.)","name":"storage.modifier.method.abap"}]},{"begin":"(?i)^\\\\s*(FORM)\\\\s([a-z_\\\\/][a-z_0-9\\\\/\\\\-?]*)","beginCaptures":{"1":{"name":"storage.type.block.abap"},"2":{"name":"entity.name.type.abap"}},"end":"\\\\s*\\\\.\\\\s*\\\\n?","patterns":[{"match":"(?i)(?<=^|\\\\s)(USING|TABLES|CHANGING|RAISING|IMPLEMENTATION|DEFINITION)(?=\\\\s+|\\\\.)","name":"storage.modifier.form.abap"},{"include":"#abaptypes"},{"include":"#keywords_followed_by_braces"}]},{"match":"(?i)(endclass|endmethod|endform|endinterface)","name":"storage.type.block.end.abap"},{"match":"(?i)(<[A-Za-z_][A-Za-z0-9_]*>)","name":"variable.other.field.symbol.abap"},{"include":"#keywords"},{"include":"#abap_constants"},{"include":"#reserved_names"},{"include":"#operators"},{"include":"#builtin_functions"},{"include":"#abaptypes"},{"include":"#system_fields"},{"include":"#sql_functions"},{"include":"#sql_types"}],"repository":{"abap_constants":{"match":"(?i)(?<=\\\\s)(initial|null|@?space|@?abap_true|@?abap_false|@?abap_undefined|table_line|%_final|%_hints|%_predefined|col_background|col_group|col_heading|col_key|col_negative|col_normal|col_positive|col_total|adabas|as400|db2|db6|hdb|oracle|sybase|mssqlnt|pos_low|pos_high)(?=\\\\s|\\\\.|,)","name":"constant.language.abap"},"abaptypes":{"patterns":[{"match":"(?i)\\\\s(abap_bool|string|xstring|any|clike|csequence|numeric|xsequence|decfloat|decfloat16|decfloat34|utclong|simple|int8|c|n|i|p|f|d|t|x)(?=\\\\s|\\\\.|,)","name":"support.type.abap"},{"match":"(?i)\\\\s(TYPE|REF|TO|LIKE|LINE|OF|STRUCTURE|STANDARD|SORTED|HASHED|INDEX|TABLE|WITH|UNIQUE|NON-UNIQUE|SECONDARY|DEFAULT|KEY)(?=\\\\s|\\\\.|,)","name":"keyword.control.simple.abap"}]},"arithmetic_operator":{"match":"(?i)(?<=\\\\s)(\\\\+|-|\\\\*|\\\\*\\\\*|\\\\/|%|DIV|MOD|BIT-AND|BIT-OR|BIT-XOR|BIT-NOT)(?=\\\\s)","name":"keyword.control.simple.abap"},"builtin_functions":{"match":"(?i)(?<=\\\\s)(abs|sign|ceil|floor|trunc|frac|acos|asin|atan|cos|sin|tan|cosh|sinh|tanh|exp|log|log10|sqrt|strlen|xstrlen|charlen|lines|numofchar|dbmaxlen|round|rescale|nmax|nmin|cmax|cmin|boolc|boolx|xsdbool|contains|contains_any_of|contains_any_not_of|matches|line_exists|ipow|char_off|count|count_any_of|count_any_not_of|distance|condense|concat_lines_of|escape|find|find_end|find_any_of|find_any_not_of|insert|match|repeat|replace|reverse|segment|shift_left|shift_right|substring|substring_after|substring_from|substring_before|substring_to|to_upper|to_lower|to_mixed|from_mixed|translate|bit-set|line_index)(?=\\\\()","name":"entity.name.function.builtin.abap"},"comparison_operator":{"match":"(?i)(?<=\\\\s)(<|>|<=|>=|=|<>|eq|ne|lt|le|gt|ge|cs|cp|co|cn|ca|na|ns|np|byte-co|byte-cn|byte-ca|byte-na|byte-cs|byte-ns|o|z|m)(?=\\\\s)","name":"keyword.control.simple.abap"},"control_keywords":{"match":"(?i)(^|\\\\s)(at|case|catch|continue|do|elseif|else|endat|endcase|endcatch|enddo|endif|endloop|endon|endtry|endwhile|if|loop|on|raise|try|while)(?=\\\\s|\\\\.|:)","name":"keyword.control.flow.abap"},"generic_names":{"match":"[A-Za-z_][A-Za-z0-9_]*"},"keywords":{"patterns":[{"include":"#main_keywords"},{"include":"#text_symbols"},{"include":"#control_keywords"},{"include":"#keywords_followed_by_braces"}]},"keywords_followed_by_braces":{"captures":{"1":{"name":"keyword.control.simple.abap"},"2":{"name":"variable.other.abap"}},"match":"(?i)\\\\b(data|value|field-symbol|final|reference|resumable)\\\\((<?[a-z_\\\\/][a-z_0-9\\\\/]*>?)\\\\)"},"logical_operator":{"match":"(?i)(?<=\\\\s)(not|or|and)(?=\\\\s)","name":"keyword.control.simple.abap"},"main_keywords":{"match":"(?i)(?<=^|\\\\s)(abap-source|abstract|accept|accepting|access|according|action|activation|actual|add|add-corresponding|adjacent|after|alias|aliases|all|allocate|amdp|analysis|analyzer|append|appending|application|archive|area|arithmetic|as|ascending|assert|assign|assigned|assigning|association|asynchronous|at|attributes|authority|authority-check|authorization|auto|back|background|backward|badi|base|before|begin|behavior|between|binary|bit|blank|blanks|block|blocks|bound|boundaries|bounds|boxed|break|break-point|buffer|by|bypassing|byte|byte-order|call|calling|cast|casting|cds|centered|change|changing|channels|char-to-hex|character|check|checkbox|cid|circular|class|class-data|class-events|class-method|class-methods|class-pool|cleanup|clear|client|clients|clock|clone|close|cnt|code|collect|color|column|comment|comments|commit|common|communication|comparing|component|components|compression|compute|concatenate|cond|condense|condition|connection|constant|constants|context|contexts|control|controls|conv|conversion|convert|copy|corresponding|count|country|cover|create|currency|current|cursor|customer-function|data|database|datainfo|dataset|date|daylight|ddl|deallocate|decimals|declarations|deep|default|deferred|define|delete|deleting|demand|descending|describe|destination|detail|determine|dialog|did|directory|discarding|display|display-mode|distance|distinct|divide|divide-corresponding|dummy|duplicate|duplicates|duration|during|dynpro|edit|editor-call|empty|enabled|enabling|encoding|end|end-enhancement-section|end-of-definition|end-of-page|end-of-selection|end-test-injection|end-test-seam|endenhancement|endexec|endfunction|endian|ending|endmodule|endprovide|endselect|endwith|enhancement|enhancement-point|enhancement-section|enhancements|entities|entity|entries|entry|enum|equiv|errors|escape|escaping|event|events|exact|except|exception|exception-table|exceptions|excluding|exec|execute|exists|exit|exit-command|expanding|explicit|exponent|export|exporting|extended|extension|extract|fail|failed|features|fetch|field|field-groups|field-symbols|fields|file|fill|filter|filters|final|find|first|first-line|fixed-point|flush|following|for|format|forward|found|frame|frames|free|from|full|function|function-pool|generate|get|giving|graph|group|groups|handle|handler|hashed|having|header|headers|heading|help-id|help-request|hide|hint|hold|hotspot|icon|id|identification|identifier|ignore|ignoring|immediately|implemented|implicit|import|importing|in|inactive|incl|include|includes|including|increment|index|index-line|indicators|infotypes|inheriting|init|initial|initialization|inner|input|insert|instance|instances|intensified|interface|interface-pool|interfaces|internal|intervals|into|inverse|inverted-date|is|job|join|keep|keeping|kernel|key|keys|keywords|kind|language|last|late|layout|leading|leave|left|left-justified|legacy|length|let|level|levels|like|line|line-count|line-selection|line-size|linefeed|lines|link|list|list-processing|listbox|load|load-of-program|local|locale|lock|locks|log-point|logical|lower|mapped|mapping|margin|mark|mask|match|matchcode|maximum|members|memory|mesh|message|message-id|messages|messaging|method|methods|mode|modif|modifier|modify|module|move|move-corresponding|multiply|multiply-corresponding|name|nametab|native|nested|nesting|new|new-line|new-page|new-section|next|no-display|no-extension|no-gap|no-gaps|no-grouping|no-heading|no-scrolling|no-sign|no-title|no-zero|nodes|non-unicode|non-unique|number|object|objects|objmgr|obligatory|occurence|occurences|occurrence|occurrences|occurs|of|offset|on|only|open|optional|option|options|order|others|out|outer|output|output-length|overflow|overlay|pack|package|padding|page|parameter|parameter-table|parameters|part|partially|pcre|perform|performing|permissions|pf-status|places|pool|position|pragmas|preceding|precompiled|preferred|preserving|primary|print|print-control|private|privileged|procedure|process|program|property|protected|provide|push|pushbutton|put|query|queue-only|queueonly|quickinfo|radiobutton|raising|range|ranges|read|read-only|receive|received|receiving|redefinition|reduce|ref|reference|refresh|regex|reject|renaming|replace|replacement|replacing|report|reported|request|requested|required|reserve|reset|resolution|respecting|response|restore|result|results|resumable|resume|retry|return|returning|right|right-justified|rollback|rows|rp-provide-from-last|run|sap|sap-spool|save|saving|scan|screen|scroll|scroll-boundary|scrolling|search|seconds|section|select|select-options|selection|selection-screen|selection-set|selection-sets|selection-table|selections|send|separate|separated|session|set|shared|shift|shortdump|shortdump-id|sign|simple|simulation|single|size|skip|skipping|smart|some|sort|sortable|sorted|source|specified|split|spool|spots|sql|stable|stamp|standard|start-of-selection|starting|state|statement|statements|static|statics|statusinfo|step|step-loop|stop|structure|structures|style|subkey|submatches|submit|subroutine|subscreen|substring|subtract|subtract-corresponding|suffix|sum|summary|supplied|supply|suppress|switch|symbol|syntax-check|syntax-trace|system-call|system-exceptions|tab|tabbed|table|tables|tableview|tabstrip|target|task|tasks|test|test-injection|test-seam|testing|text|textpool|then|throw|time|times|title|titlebar|to|tokens|top-lines|top-of-page|trace-file|trace-table|trailing|transaction|transfer|transformation|translate|transporting|trmac|truncate|truncation|type|type-pool|type-pools|types|uline|unassign|unbounded|under|unicode|union|unique|unit|unix|unpack|until|unwind|up|update|upper|user|user-command|using|utf-8|uuid|valid|validate|value|value-request|values|vary|varying|version|via|visible|wait|when|where|window|windows|with|with-heading|with-title|without|word|work|workspace|write|xml|zone)(?=\\\\s|\\\\.|:|,)","name":"keyword.control.simple.abap"},"operators":{"patterns":[{"include":"#other_operator"},{"include":"#arithmetic_operator"},{"include":"#comparison_operator"},{"include":"#logical_operator"}]},"other_operator":{"match":"(?<=\\\\s)(&&|&|\\\\?=|\\\\+=|-=|\\\\/=|\\\\*=|&&=|&=)(?=\\\\s)","name":"keyword.control.simple.abap"},"reserved_names":{"match":"(?i)(?<=\\\\s)(me|super)(?=\\\\s|\\\\.|,|->)","name":"constant.language.abap"},"sql_functions":{"match":"(?i)(?<=\\\\s)(abap_system_timezone|abap_user_timezone|abs|add_days|add_months|allow_precision_loss|as_geo_json|avg|bintohex|cast|ceil|coalesce|concat_with_space|concat|corr_spearman|corr|count|currency_conversion|datn_add_days|datn_add_months|datn_days_between|dats_add_days|dats_add_months|dats_days_between|dats_from_datn|dats_is_valid|dats_tims_to_tstmp|dats_to_datn|dayname|days_between|dense_rank|division|div|extract_day|extract_hour|extract_minute|extract_month|extract_second|extract_year|first_value|floor|grouping|hextobin|initcap|instr|is_valid|lag|last_value|lead|left|length|like_regexpr|locate_regexpr_after|locate_regexpr|locate|lower|lpad|ltrim|max|median|min|mod|monthname|ntile|occurrences_regexpr|over|product|rank|replace_regexpr|replace|rigth|round|row_number|rpad|rtrim|stddev|string_agg|substring_regexpr|substring|sum|tims_from_timn|tims_is_valid|tims_to_timn|to_blob|to_clob|tstmp_add_seconds|tstmp_current_utctimestamp|tstmp_is_valid|tstmp_seconds_between|tstmp_to_dats|tstmp_to_dst|tstmp_to_tims|tstmpl_from_utcl|tstmpl_to_utcl|unit_conversion|upper|utcl_add_seconds|utcl_current|utcl_seconds_between|uuid|var|weekday)(?=\\\\()","name":"entity.name.function.sql.abap"},"sql_types":{"match":"(?i)(?<=\\\\s)(char|clnt|cuky|curr|datn|dats|dec|decfloat16|decfloat34|fltp|int1|int2|int4|int8|lang|numc|quan|raw|sstring|timn|tims|unit|utclong)(?=\\\\s|\\\\(|\\\\))","name":"entity.name.type.sql.abap"},"system_fields":{"captures":{"1":{"name":"variable.language.abap"},"2":{"name":"variable.language.abap"}},"match":"(?i)\\\\b(sy)-(abcde|batch|binpt|calld|callr|colno|cpage|cprog|cucol|curow|datar|datlo|datum|dayst|dbcnt|dbnam|dbsysc|dyngr|dynnr|fdayw|fdpos|host|index|langu|ldbpg|lilli|linct|linno|linsz|lisel|listi|loopc|lsind|macol|mandt|marow|modno|msgid|msgli|msgno|msgty|msgv[1-4]|opsysc|pagno|pfkey|repid|saprl|scols|slset|spono|srows|staco|staro|stepl|subrc|sysid|tabix|tcode|tfill|timlo|title|tleng|tvar\\\\d|tzone|ucomm|uline|uname|uzeit|vline|wtitl|zonlo)(?=\\\\.|\\\\s)"},"text_symbols":{"captures":{"1":{"name":"keyword.control.simple.abap"},"2":{"name":"constant.numeric.abap"}},"match":"(?i)(?<=^|\\\\s)(text)-([A-Z0-9]{1,3})(?=\\\\s|\\\\.|:|,)"}},"scopeName":"source.abap"}'))]}}]);