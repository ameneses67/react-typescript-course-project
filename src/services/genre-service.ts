import create from "./http-service";

export interface Genre {
	id: number;
	name: string;
}

export default create("genres");
