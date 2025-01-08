"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{90186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(66915);let i=Object.freeze(JSON.parse('{"displayName":"QML","name":"qml","patterns":[{"match":"\\\\bpragma\\\\s+Singleton\\\\b","name":"constant.language.qml"},{"include":"#import-statements"},{"include":"#object"},{"include":"#comment"}],"repository":{"attributes-dictionary":{"patterns":[{"include":"#typename"},{"include":"#keywords"},{"include":"#identifier"},{"include":"#attributes-value"},{"include":"#comment"}]},"attributes-value":{"patterns":[{"begin":"(?<=\\\\w)\\\\s*:\\\\s*(?=[A-Z]\\\\w*\\\\s*\\\\{)","description":"A QML object as value.","end":"(?<=\\\\})","patterns":[{"include":"#object"}]},{"begin":"(?<=\\\\w)\\\\s*:\\\\s*\\\\[","description":"A list as value.","end":"\\\\](.*)$","endCaptures":{"0":{"patterns":[{"include":"source.js"}]}},"patterns":[{"include":"#object"},{"include":"source.js"}]},{"begin":"(?<=\\\\w)\\\\s*:(?=\\\\s*\\\\{?\\\\s*$)","description":"A block of JavaScript code as value.","end":"(?<=\\\\})","patterns":[{"begin":"\\\\{","contentName":"meta.embedded.block.js","end":"\\\\}","patterns":[{"include":"source.js"}]}]},{"begin":"(?<=\\\\w)\\\\s*:","contentName":"meta.embedded.line.js","description":"A JavaScript expression as value.","end":";|$|(?=\\\\})","patterns":[{"include":"source.js"}]}]},"comment":{"patterns":[{"begin":"(\\\\/\\\\/:)","beginCaptures":{"1":{"name":"storage.type.class.qml.tr"}},"end":"$","patterns":[{"include":"#comment-contents"}]},{"begin":"(\\\\/\\\\/[~|=])\\\\s*([A-Za-z_$][\\\\w$.\\\\[\\\\]]*)","beginCaptures":{"1":{"name":"storage.type.class.qml.tr"},"2":{"name":"variable.other.qml.tr"}},"end":"$","patterns":[{"include":"#comment-contents"}]},{"begin":"(\\\\/\\\\/)","beginCaptures":{"1":{"name":"comment.line.double-slash.qml"}},"end":"$","patterns":[{"include":"#comment-contents"}]},{"begin":"(\\\\/\\\\*)","beginCaptures":{"1":{"name":"comment.line.double-slash.qml"}},"end":"(\\\\*\\\\/)","endCaptures":{"1":{"name":"comment.line.double-slash.qml"}},"patterns":[{"include":"#comment-contents"}]}]},"comment-contents":{"patterns":[{"match":"\\\\b(TODO|DEBUG|XXX)\\\\b","name":"constant.language.qml"},{"match":"\\\\b(BUG|FIXME)\\\\b","name":"invalid"},{"match":".","name":"comment.line.double-slash.qml"}]},"data-types":{"patterns":[{"description":"QML basic data types.","match":"\\\\b(bool|double|enum|int|list|real|string|url|variant|var)\\\\b","name":"storage.type.qml"},{"description":"QML modules basic data types.","match":"\\\\b(date|point|rect|size)\\\\b","name":"support.type.qml"}]},"group-attributes":{"patterns":[{"begin":"\\\\b([_a-zA-Z]\\\\w*)\\\\s*\\\\{","beginCaptures":{"1":{"name":"variable.parameter.qml"}},"end":"\\\\}","patterns":[{"include":"$self"},{"include":"#comment"},{"include":"#attributes-dictionary"}]}]},"identifier":{"description":"The name of variable, key, signal and etc.","patterns":[{"match":"\\\\b[_a-zA-Z]\\\\w*\\\\b","name":"variable.parameter.qml"}]},"import-statements":{"patterns":[{"begin":"\\\\b(import)\\\\b","beginCaptures":{"1":{"name":"keyword.control.import.qml"}},"end":"$","patterns":[{"match":"\\\\bas\\\\b","name":"keyword.control.as.qml"},{"include":"#string"},{"description":"<Version.Number>","match":"\\\\b\\\\d+\\\\.\\\\d+\\\\b","name":"constant.numeric.qml"},{"description":"as <Namespace>","match":"(?<=as)\\\\s+[A-Z]\\\\w*\\\\b","name":"entity.name.type.qml"},{"include":"#identifier"},{"include":"#comment"}]}]},"keywords":{"patterns":[{"include":"#data-types"},{"include":"#reserved-words"}]},"method-attributes":{"patterns":[{"begin":"\\\\b(function)\\\\b","beginCaptures":{"1":{"name":"storage.type.qml"}},"end":"(?<=\\\\})","patterns":[{"begin":"([_a-zA-Z]\\\\w*)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function.qml"}},"end":"\\\\)","patterns":[{"include":"#identifier"}]},{"begin":"\\\\{","contentName":"meta.embedded.block.js","end":"\\\\}","patterns":[{"include":"source.js"}]}]}]},"object":{"patterns":[{"begin":"\\\\b([A-Z]\\\\w*)\\\\s*\\\\{","beginCaptures":{"1":{"name":"entity.name.type.qml"}},"end":"\\\\}","patterns":[{"include":"$self"},{"include":"#group-attributes"},{"include":"#method-attributes"},{"include":"#signal-attributes"},{"include":"#comment"},{"include":"#attributes-dictionary"}]}]},"reserved-words":{"patterns":[{"description":"Attribute modifier.","match":"\\\\b(default|alias|readonly|required)\\\\b","name":"storage.modifier.qml"},{"match":"\\\\b(property|id|on)\\\\b","name":"keyword.other.qml"},{"description":"Special words for signal handlers including property change.","match":"\\\\b(on[A-Z]\\\\w*(Changed)?)\\\\b","name":"keyword.control.qml"}]},"signal-attributes":{"patterns":[{"begin":"\\\\b(signal)\\\\b","beginCaptures":{"1":{"name":"storage.type.qml"}},"end":"$","patterns":[{"begin":"([_a-zA-Z]\\\\w*)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function.qml"}},"end":"\\\\)","patterns":[{"include":"#keywords"},{"include":"#identifier"}]},{"include":"#identifier"},{"include":"#comment"}]}]},"string":{"description":"String literal with double or signle quote.","patterns":[{"begin":"\'","end":"\'","name":"string.quoted.single.qml"},{"begin":"\\"","end":"\\"","name":"string.quoted.double.qml"}]},"typename":{"description":"The name of type. First letter must be uppercase.","patterns":[{"match":"\\\\b[A-Z]\\\\w*\\\\b","name":"entity.name.type.qml"}]}},"scopeName":"source.qml","embeddedLangs":["javascript"]}')),s=[...a.default,i]}}]);