<template>
    <DashboardMenu>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class='card overflow-scroll'>
                    <div class='card-body'>

                        <Loading v-if="state.loading"/>

                        <template v-else>

                        <template v-if="result" >
                            <form class="form-inline row mb-3" role="search">
                                <div class="col-9 my-1">
                                    <label>Search By Status</label>
                                    <select class="form-select" v-model="state.status">
                                        <option selected value="">Search By Status</option>
                                        <option value="0">Completed</option>
                                        <option value="1">In Progress</option>
                                        <option value="2">Not Started</option>
                                    </select>
                                </div>

                                <div class="col-3 my-1 mt-4 pt-2">
                                    <button type="submit" class="btn btn-home btn-sm" @click.prevent="refetch()">Search</button>
                                </div>
                            </form>
                            <TaskList :tasks="result"/>
                        </template>

                        <div v-else class="rounded-0">
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>Hi {{user.name.firstname}}!</strong> <br/>Let's get started in creating your task today.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>
                            <div class="d-flex justify-content-center">
                                <router-link class="text-decoration-none text-dark" :to="{ name: 'task_editor' }">
                                    <i class="fas fa-edit fa-6x text-center ms-3"></i><br />
                                    <span class="ms-3 fw-bold">Create Task</span>
                                </router-link>
                            </div>
                        </div>
                    </template>
                    </div>
                </div>
            </div>
        </div>
    </DashboardMenu>
</template>

<script>
import { reactive } from 'vue'
import { useAuthStore } from "@/store/auth.js"
import gql from "graphql-tag";
import { useQuery } from '@vue/apollo-composable'
import TaskList from '@/components/includes/TaskList.vue'


export default {
    components: {
        TaskList
  },
    setup() {
        const state = reactive({
            loading: false,
            status: ''
        })

        const { result, loading, refetch } = useQuery(gql`
      query getTasks ($status: Int)  {
        tasks(status:$status) {
          id
          title
          description
          due_date
          status
        }
      }
    `, ()=>({
        status: state.status >= 0 ? Number(state.status) : ''
    }),
    )
    
    const user = useAuthStore().data
        

    state.loading = loading

    

        return {
            state,
            user,
            result,
            refetch 
        }
    }
}
</script>