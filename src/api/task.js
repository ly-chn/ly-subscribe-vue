import request from "@/util/request";

export function getAllTask() {
    return request.get('task')
}