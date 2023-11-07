import moment, {Moment} from "moment";

export const rules = {
    required: (message: string) => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            // debugger;
            // console.log(value);
            if (value.isAfter(moment())) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message));
        }
    })
}
