<template>
    <DashboardMenu>
        
        <div class="row justify-content-center">
            <div class="col-md-12">
                
                <div class='card overflow-scroll'>
                    <div class='card-body'>
                        <BodyHeader heading="Details" />

                        <Loading v-if="state.loading"/>

                        <div class="card" v-if="result && result.tasks.length >= 1">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <div class="flex-grow-1 ms-5">
                                        <p class="mb-1"><span class='fw-bold'>Title:</span> {{ capitalLetters(result.tasks[0].title) }} </p>
                                    
                                        <p class="mb-1"><span class='fw-bold'>Description:</span> {{ result.tasks[0].description }} </p>

                                        <p class="mb-1"><span class='fw-bold'>Status:</span> {{ result.tasks[0].status }} </p>
                                    
                                        <p class="mb-1"><span class='fw-bold'>Date Created:</span> {{ format(new Date(result.tasks[0].created_at), "do,MMMM yyyy @ p") }} </p>
                                    
                                        <p class="mb-1"><span class='fw-bold'>Due Date:</span> {{ format(new Date(result.tasks[0].due_date), "do,MMMM yyyy") }} </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="btn-group d-flex justify-content-center">
                                    <button type="button" class="pre-run btn btn-dark btn-sm" data-caption="Are you sure you want to delete this task?"
                                    data-classname="run-get-request" data-bc="delete">Delete</button>

                                    <router-link class="text-decoration-none bg-primary btn-sm btn text-white ms-3" :to="{name:'task_editor', query: { id: result.tasks[0].id }}">
                                        Edit
                                    </router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DashboardMenu>
</template>

<script>
import { capitalLetters, queryString, DisplayAsToast } from '@/helper.js'
import { reactive } from 'vue'
import { useRouter } from "vue-router"
import { format } from "date-fns"
import gql from "graphql-tag";
import { useQuery, useMutation  } from '@vue/apollo-composable'

export default {
    setup() {
        const router = useRouter()
        const state = reactive({
            loading: false,
            id: queryString('id'),
        })

        const { result, loading } = useQuery(gql`
            query getTasks {
                tasks(id: ${queryString('id')}) {
                    id
                    title
                    description
                    due_date
                    status
                    created_at
                }
            }
        `)

        state.loading = loading

        const { mutate: deleteTask, loading: deleteTaskLoading, onDone } = useMutation(gql`
                mutation deleteTask ($id: Int!) {
                    deleteTask (id: $id) {
                        id
                        title
                    }
                }
                `)


        document.addEventListener('delete', (value) => {
            state.loading = deleteTaskLoading;
            
            deleteTask({
                id: Number(state.id),
            });

            onDone(result => {
                DisplayAsToast('Deleted successfully.')

                setTimeout(() => {
                    router.push({ name: 'tasks', replace: true })
                }, 2000);
            })
        });

        return {
            state,
            capitalLetters,
            format,
            result,
        }
    }
}
</script>