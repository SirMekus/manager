<template>
    <div class="table-responsive">
        <table class="table table-stripped table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tasks.tasks" :key="item.id" :class="{'bg-success text-white':item?.status == 'COMPLETED'}, {'bg-danger text-white':differenceInDays(new Date(item?.due_date), new Date()) <= 1 && item?.status != 'COMPLETED'}" >
                  <td>{{ capitalLetters(item?.title) }}</td>
                  <td>{{ format(new Date(item?.due_date), "do,MMMM yyyy") }}</td>
                  <td>
                    <span class="badge bg-dark">
                    <router-link class="text-decoration-none text-white" :to="{name:'task_details', query: { id: item?.id }}">
                        View More
                    </router-link>
                    </span>
                </td>
                </tr>
              </tbody>
        </table>
    </div>
</template>

<script>
    import { capitalLetters } from "@/helper.js"
    import { format, differenceInDays } from "date-fns"

    export default {
        props: ['tasks'],
        setup(props) {

		return {
            capitalLetters,
            format,
            differenceInDays
		};
	   }
    }
    </script>