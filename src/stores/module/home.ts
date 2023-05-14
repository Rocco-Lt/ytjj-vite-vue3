import { defineStore } from 'pinia';
import { getManagementNumApi } from '@/api/home'
export const homeStore = defineStore({
    id: 'homeData',
    state: () => (
        {
            thunms: {},
            homeLoading: false,

        }
    ),
    actions: {
        async init() {
            this.homeLoading = true
            try {
                const thunms: any = await getManagementNumApi()
                this.thunms = thunms.data;
                this.homeLoading = false
            } catch (error) {
                this.homeLoading = false
            }
        }


    }

})