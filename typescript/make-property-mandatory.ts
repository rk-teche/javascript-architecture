
// <T> -> It works like argument which can be passed
// `data` property can only bind with `success` status and
// `message` property can only bind with `error` status
type ApiResponse<T> = {
    timestamp: Date
} & (ApiSuccess<T> | ApiError)

type ApiSuccess<T> = {
    status: 'success',
    data: T
}

type ApiError = {
    status: 'error',
    message: string
}

const successResponse: ApiResponse<number> = {
    status: "success",
    data: 123,
    timestamp: new Date()
}

const errorResponse: ApiResponse<number> = {
    status: "error",
    message: "An error occured",
    timestamp: new Date()
}
