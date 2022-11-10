import { ITodo } from "../types/types"
import Reac, {FC} from 'react'

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo: ITodo})=> {
  return (
    <div>
     
    </div>
  )
}

export default TodoItem