<!--
 * @Author: linliangwei 943607147@qq.com
 * @Date: 2023-05-20 13:49:56
 * @LastEditors: linliangwei 943607147@qq.com
 * @LastEditTime: 2023-05-20 20:27:54
 * @FilePath: \Base_APP_PC\src\views\backstage\menu\index.vue
 * @Description: 注释
-->
<template>
    <a-button type="primary" class="d">11111</a-button>
    <a-table :columns="columns" :data-source="data" bordered>
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'tags'">
                <span>
                    <a-tag
                        v-for="tag in record.tags"
                        :key="tag"
                        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                    >
                        {{ tag.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <a>Invite 一 {{ record.name }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                    </a>
                </span>
            </template>
        </template>
    </a-table>
</template>
<script setup lang="ts" name="menu">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'

const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Action',
        key: 'action',
    },
]

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
]
</script>

<style lang="less"></style>
