import {Resolver , Query} from 'type-graphql'
@Resolver()
class HelloResolver{
	@Query(() =>String , {nullable : true})
	async helloWorld(){
		return 'start it quick'
	}
}
export {HelloResolver}