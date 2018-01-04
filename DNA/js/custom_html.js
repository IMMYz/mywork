var secondParent = '<div class="dna-double-card-warp">\n' +
    '    <div class="dna-male" style="float:left;width:50%;height:100%;">\n' +
    '        <img src="images/double-male.png" style="width:67px;height:84px;float:left">\n' +
    '        <div style="float:left;margin-left:15px">\n' +
    '            <p><span>姓名:</span><span class="DNA-name">杨梦雪</span><span class="DNA-from">&#12288;嫡生</span></p>\n' +
    '            <p><span>生日:</span><span class="DNA-birth">1994/10/21</span></p>\n' +
    '            <p><span>民族:</span><span class="DNA-race">汉族</span></p>\n' +
    '        </div>\n' +
    '        <div style="clear:both"></div>\n' +
    '        <div>\n' +
    '            <p><span>身份证号:</span><span class="DNA-id">532923199410212525</span></p>\n' +
    '            <p><span>所在派出所:</span><span class="DNA-station">文化派出所</span></p>\n' +
    '        </div>\n' +
    '        <img style="margin-top:20px" class="DNA-status-images" src="images/dsj.png" title="已送检">\n' +
    '    </div>\n' +
    '    <div class="dna-female" style="float:left;width:50%;height:100%;">\n' +
    '        <img src="images/double-female.png" style="width:67px;height:84px;float:left">\n' +
    '        <div style="float:left;margin-left:15px">\n' +
    '            <p><span>姓名:</span><span class="DNA-name">杨梦雪</span><span class="DNA-from">&#12288;嫡生</span></p>\n' +
    '            <p><span>生日:</span><span class="DNA-birth">1994/10/21</span></p>\n' +
    '            <p><span>民族:</span><span class="DNA-race">汉族</span></p>\n' +
    '        </div>\n' +
    '        <div style="clear:both"></div>\n' +
    '        <div>\n' +
    '            <p><span>身份证号:</span><span class="DNA-id">532923199410212525</span></p>\n' +
    '            <p><span>所在派出所:</span><span class="DNA-station">文化派出所</span></p>\n' +
    '        </div>\n' +
    '        <img style="margin-top:20px" class="DNA-status-images" src="images/dsj.png" title="已送检">\n' +
    '    </div>\n' +
    '    <div style="clear:both"></div>\n' +
    '</div>'

var singleMale = '<div class="dna-card-warp dna-male">\n' +
    '    <img src="images/male.png" style="width:100px;height:122px;float:left;margin-left:5px">\n' +
    '    <div class="dna-card-info" style="color:#fff;float:left">\n' +
    '        <p><span>姓名:</span><span class="DNA-name">杨梦雪</span><span>&#12288;来源:</span><span class="DNA-from">嫡生</span></p>\n' +
    '        <p><span>生日:</span><span class="DNA-birth">1994/10/21</span></p>\n' +
    '        <p><span>民族:</span><span class="DNA-race">汉族</span></p>\n' +
    '        <p><span>身份证号:</span><span class="DNA-id">532923199410212525</span></p>\n' +
    '        <p><span>所在派出所:</span><span class="DNA-station">文化派出所</span></p>\n' +
    '    </div>\n' +
    '    <div style="clear:both"></div>\n' +
    '    <div style="margin-top:25px">\n' +
    '        <img class="DNA-status-images" src="images/dsj.png" title="已送检">\n' +
    '    </div>\n' +
    '</div>'

var singleFemale = '<div class="dna-card-warp dna-female">\n' +
    '    <img src="images/female.png" style="width:100px;height:122px;float:left;margin-left:5px">\n' +
    '    <div class="dna-card-info" style="color:#fff;float:left">\n' +
    '        <p><span>姓名:</span><span class="DNA-name">杨梦雪</span><span>&#12288;来源:</span><span class="DNA-from">嫡生</span></p>\n' +
    '        <p><span>生日:</span><span class="DNA-birth">1994/10/21</span></p>\n' +
    '        <p><span>民族:</span><span class="DNA-race">汉族</span></p>\n' +
    '        <p><span>身份证号:</span><span class="DNA-id">532923199410212525</span></p>\n' +
    '        <p><span>所在派出所:</span><span class="DNA-station">文化派出所</span></p>\n' +
    '    </div>\n' +
    '    <div style="clear:both"></div>\n' +
    '    <div style="margin-top:25px">\n' +
    '        <img class="DNA-status-images" src="images/dsj.png" title="已送检">\n' +
    '    </div>\n' +
    '</div>'

var singleDead = '<div class="dna-card-warp dna-dead">\n' +
    '    <img src="images/dead.png" style="width:100px;height:122px;float:left;margin-left:5px">\n' +
    '    <div class="dna-card-info" style="color:#fff;float:left">\n' +
    '        <p><span>姓名:</span><span class="DNA-name">杨梦雪</span><span>&#12288;来源:</span><span class="DNA-from">嫡生</span></p>\n' +
    '        <p><span>生日:</span><span class="DNA-birth">1994/10/21</span></p>\n' +
    '        <p><span>民族:</span><span class="DNA-race">汉族</span></p>\n' +
    '        <p><span>身份证号:</span><span class="DNA-id">532923199410212525</span></p>\n' +
    '        <p><span>所在派出所:</span><span class="DNA-station">文化派出所</span></p>\n' +
    '    </div>\n' +
    '    <div style="clear:both"></div>\n' +
    '    <div style="margin-top:25px">\n' +
    '        <img class="DNA-status-images" src="images/dsj.png" title="已送检">\n' +
    '        <span style="float:right">\n' +
    '        <img src="images/alreadydead.png" title="已死亡">\n' +
    '        </span>\n' +
    '    </div>\n' +
    '</div>'