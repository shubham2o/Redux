import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            transformResponse: (tasks) => tasks.reverse(),
            providesTags: ["Tasks"],
        }),

        addTasks: builder.mutation({
            query: (task) => ({
                url: '/tasksfdfdf',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ["Tasks"],
            async onQueryStarted(task, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(api.util.updateQueryData("getTasks", undefined, (draft) => {
                    draft.unshift({ id: crypto.randomUUID(), ...task });
                }));
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),

        updateTasks: builder.mutation({
            query: ({ id, ...updatedTasks }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: updatedTasks,
            }),
            invalidatesTags: ["Tasks"],
            async onQueryStarted({ id, ...updatedTask }, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(api.util.updateQueryData("getTasks", undefined, (tasksList) => {
                    const taskIndex = tasksList.findIndex((el) => el.id === id)
                    tasksList[taskIndex] = { ...tasksList[taskIndex], ...updatedTask };
                }));
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),

        deleteTasks: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Tasks"],
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(api.util.updateQueryData("getTasks", undefined, (tasksList) => {
                    const taskIndex = tasksList.findIndex((el) => el.id === id)
                    tasksList.splice(taskIndex, 1)
                }));
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const { useGetTasksQuery, useAddTasksMutation, useUpdateTasksMutation, useDeleteTasksMutation } = api;