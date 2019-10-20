<template xmlns:v-for="http://www.w3.org/1999/xhtml">
    <div class="demo-slot">
            <comp-tabs title="Tiêu đề của tabs">
                <ul class="tab-header">
                    <li
                            v-on:click="setActiveTab(index)"
                            v-for="(item, index ) in tabHeader" v-bind:key="index"
                            v-bind:class="{ active: tabActive == index }">
                        {{ item.text }}
                     </li>
                </ul>
                <div class="tab-content tab1" v-if="tabActive === 0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, cupiditate eveniet ex impedit incidunt ipsam minus, nam odio quasi vero, voluptas! Ea facere odio quibusdam ratione saepe unde voluptates.
                </div>
                <div class="tab-content tab2" v-else-if="tabActive === 1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iusto nam reiciendis sunt. Aliquam beatae commodi consequuntur debitis harum maxime nulla obcaecati odit perspiciatis qui reprehenderit tempora, temporibus. Adipisci, id!
                </div>
                <div class="tab-content tab3" v-else>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, aut blanditiis error est exercitationem fugit harum ipsum iure natus nulla pariatur perferendis possimus quae, quam sapiente sed tempore, ullam!
                </div>
            </comp-tabs>
    </div>
</template>

<script>
    import compTabs from './compTabs';
    export default {
        name: "demoSlot",
        data(){
            return {
                tabHeader:[
                    { text: 'Tab 1'},
                    { text: 'Tab 2'},
                    { text: 'Tab 3'},
                ],
                tabActive:0
            }
        },
        methods:{
            setActiveTab(index){
                console.log('setActiveTab', index);
                this.tabActive = index
            }
        },
        component:{
            compTabs
        }
    }
</script>

<style scoped>
    .demo-slot {
        margin-top: 50px;
        padding: 15px 20px;
        border: 2px solid aqua;
    }
    .tab-header {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
    }
    .tab-header li {
        padding: 10px 15px;
        background-color: white;
        transition: all .3s ease;

    }
    .tab-header li:hover {
        color: white;
        background-color: black;
    }

</style>