import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Model from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Model>
        <Model.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Model.Open>
        <Model.Window name="cabin-form">
          <CreateCabinForm />
        </Model.Window>

        {/* <Model.Open opens="table">
        <Button>Show Table</Button>
        </Model.Open>
        <Model.Window name="table">
        <CabinTable />
      </Model.Window> */}
      </Model>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setisOpenModel] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setisOpenModel((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModel && (
//         <Model onClose={() => setisOpenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModel(false)} />
//         </Model>
//       )}
//     </div>
//   );
// }

export default AddCabin;
