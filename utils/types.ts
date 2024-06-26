export interface Customer {
	customerId?: number;
	name: string;
	address: string;
	email: string;
	phone: string;
	username: string;
	password?: string;
	enabled?: boolean;
	role?: string;
}
