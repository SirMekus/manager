<template>
    <DashboardMenu>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card overflow-scroll pb-4" style='border-radius:30px;'>

                    <Loading v-if="state.loading" />

                    <div class="card-body">
                        <BodyHeader :heading="`${state.result?.id ? 'Update' : 'Create'} Task`" />

                        <form id='tasker'>

                            <div class="pt-4">
                                <div>
                                    <h1 class="text-center fw-bold">Task Editor</h1>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <label>Title<span style="color:red;">*</span></label>
                                        <input type="text" class="form-control form-control-lg borderless-input"
                                            autocomplete v-model="state.form.title" name="firstname" />
                                    </div>
                                </div>

                                <div class="row mt-3" v-if="state.form.id">
                                    <div class="col-12">
                                        <label>Status</label>
                                        <select class="form-control form-control-lg" name="gender"
                                            v-model="state.form.status">
                                            <option value="">Select Status</option>
                                            <option value="0">Completed</option>
                                            <option value="1">In Progress</option>
                                            <option value="2">Not Completed</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <label>Due Date</label>
                                        <input type="date" required class="form-control form-control-lg borderless-input"
                                        v-model="state.form.due_date" name="due_date" />
                                    </div>
                                </div>


                                <div class="row mt-3">
                                    <div class="col-12">
                                        <label>Description</label>
                                        <textarea v-model="state.form.description" name='description'
                                            placeholder="Give a description of this task"
                                            class="form-control form-control-lg" style="border-radius:10px;" col="2"
                                            rows="2">
                                        </textarea>
                                    </div>
                                </div>

                                <div class="form-group mt-3">
                                    <input class="btn btn-home btn-lg w-100" type="submit" :disabled="state.loading" 
                                    :value="state.form.id ? 'Update Task' : 'Create Task'" @click.prevent="runAm()" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </DashboardMenu>
</template>

<script>
import { queryString, capitalLetters, DisplayAsToast  } from '@/helper.js'
import { ref, reactive } from 'vue'
import gql from "graphql-tag";
import { useQuery, useMutation } from '@vue/apollo-composable'

export default {
    setup() {
        const state = reactive({
            loading: false,
            result: null,
            form:{
                id:  queryString('id') ?? null,
                title:null,
                description:null,
                status:null,
                due_date:null
            }
        })

        if (queryString('id')) {
            const { loading, onResult  } = useQuery(gql`
            query getTasks {
                tasks(id: ${queryString('id')}) {
                    id
                    title
                    description
                    due_date
                    status
                }
            }
           `)

           state.loading = loading

           onResult(queryResult => {
            const result = queryResult.data.tasks[0];
            state.form.id = result.id
            state.form.title = result.title
            state.form.description = result.description
            state.form.due_date = result.due_date
            state.form.status = result.status == 'COMPLETED' ? 0 : (result.status == 'IN_PROGRESS' ? 1 : 2)
           })
        }

        const { mutate: createTask, loading: creatingTaskLoading, onDone } = useMutation(gql`
                mutation createTask ($title: String!, $due_date: String!, $description: String!) {
                    createTask (title: $title, due_date: $due_date, description: $description) {
                        id
                        title
                    }
                }
                `)

        const { mutate: updateTask, loading: updatingTaskLoading, onDone: OnUpdateFinish } = useMutation(gql`
                mutation updateTask ($id: Int!, $title: String, $status: Int, $due_date: String, $description: String) {
                    updateTask (id: $id, title: $title, status: $status, due_date: $due_date, description: $description) {
                        id
                        title
                    }
                }
                `)

    
        function create(){
            state.loading = creatingTaskLoading
            
            createTask(state.form);

            onDone(result => {
                DisplayAsToast('Task was successfully created.')

                for(const element in state.form){
                    state.form[element] = null
                }
            })
        }

        function update(){
            state.loading = updatingTaskLoading

            state.form.id = Number(state.form.id)

            updateTask(state.form);

            OnUpdateFinish(result => {
                DisplayAsToast('Task was successfully updated.')
            })
        }

        function runAm(){
            (!state.form.id) ? create() : update();
        }

        return {
            state,
            capitalLetters,
            runAm,
        }
    },


}

</script>