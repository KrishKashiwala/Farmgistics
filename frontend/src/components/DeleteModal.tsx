import { useLazyQuery } from "@apollo/client"
import { DELETE_POST_ITEM } from "../graphql/queries"

const DeleteModal = ({ id, title, setPostBool }) => {
	const [deletePostItem, { error, loading }] = useLazyQuery(DELETE_POST_ITEM)
	const deletePostItems = () => {
		deletePostItem({
			variables: {
				id: id
			}
		})
	}
	console.log(id)
	if (error || loading) console.log(error)
	return (

		<div id="myModal" className="modal fade">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Delete Post</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div className="modal-body">
						<p>Do you want to delete your {title} post?</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
						<button type="button" onClick={() => deletePostItems} className="btn btn-danger">Delete {title} post</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default DeleteModal;