<template>
  <div>
    <h2>home</h2>
    <p>{{Scontent}}</p>
    <el-row>
      <el-col :span=24>
        <el-button size="small" @click="addTab(editableTabsValue2)">添加标签</el-button>
        <el-button size="small" @click="openTab('fourth')">fourth</el-button>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
          <el-tab-pane v-for="(item,index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name"></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <router-view @opened="test"></router-view>
  </div>
</template>
<script>
export default {
    data() {
        return {
            editableTabsValue2: "second",
            Scontent: "This is Scontent",
            editableTabs2: [
                {
                    title: "first",
                    url: "first",
                    name: "first",
                    conteng: "Tab 1 content"
                },
                {
                    title: "second",
                    url: "second",
                    name: "second",
                    conteng: "Tab 1 content"
                },
                {
                    title: "third",
                    url: "third",
                    name: "third",
                    conteng: "Tab 1 content"
                }
            ],
            tabIndex: 2
        };
    },
    methods: {
        handleClick(tab, event) {
            let tabs = this.editableTabs2;
            tabs.forEach((item, index) => {
                if (item.name === tab.name) {
                    let url = "/home/" + item.url;
                    this.$router.push({ path: url });
                }
            });
        },
        test(params){
          console.log(params);
          this.editableTabsValue2 = params
        },
        removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.editableTabsValue2;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.editableTabsValue2 = activeName;
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
        },
        addTab(targetName) {
            let newTabName = ++this.tabIndex + "";
            this.editableTabs2.push({
                title: "New Tab",
                name: newTabName,
                content: ""
            });
            this.editableTabsVaule2 = newTabName;
        },
        openTab(targetName) {
            let newTabName = targetName;
            this.editableTabs2.push({
                title: targetName,
                name: newTabName,
                url: "fourth",
                content: ""
            });
            this.editableTabsVaule2 = newTabName;
        }
    },
    mounted() {
        console.log(1);
    }
};
</script>
