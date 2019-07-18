import { PaginationInterface, UserInterface } from '.';

export interface UserListInterface extends PaginationInterface {
    data: UserInterface[];
}
