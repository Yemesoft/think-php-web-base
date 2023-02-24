import {defineStore} from 'pinia';
import {login} from "@/api/user";

interface ListItem {
    name: string;
    path: string;
    title: string;
}

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            list: <ListItem[]>[]
        };
    },
    getters: {
        show: state => {
            return state.list.length > 0;
        },
        nameList: state => {
            return state.list.map(item => item.name);
        }
    },
    actions: {
        login(data: Object) {
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    resolve(response)
                }).catch(e => {
                    reject(e)
                })
            })
        }
    }
});
