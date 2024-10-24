/* eslint-disable react/prop-types */
import { DateBar } from "../DateBar/DateBar";
import { EmptyHabits } from "../EmptyHabits/EmptyHabits";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitButton } from "../CreateHabitButton/CreateHabitButton";
import { CreateHabitForm } from "../CreateHabitForm/CreateHabitForm";
import { Modal } from "../Modal/Modal";
import "./HomePage.css";

function HomePage (props) {

    

    return (

        <div className='HomePage-container'>        
        <div>
          <DateBar 
            logros={props.logros}
            habits={props.habits}
            selectDay={props.selectDay}
            selectedDay={props.selectedDay} 
            daysWithDates={props.daysWithDates}
            handlePreviousWeek={props.handlePreviousWeek}
            handleNextWeek={props.handleNextWeek} 
            currentDate={props.currentDate}    
            changeWeek={props.changeWeek}

          /> 
        </div> 

        {props.habits.length === 0 ? 
          <EmptyHabits openModal={props.openModal}/> :
          <HabitList
          habits={props.habits} 
          onCompleteHabit={props.onCompleteHabit}
          onDeleteHabit={props.onDeleteHabit}
          onEditHabit={props.onEditHabit}
          setNewHabitValue={props.setNewHabitValue}
          selectedDay={props.selectedDay}  
          />
        }

        {props.openModal && (
          <Modal>
            <CreateHabitForm 
              setOpenModal={props.setOpenModal}
              onAddHabit={props.onAddHabit}
              newHabitValue={props.newHabitValue}
              setNewHabitValue={props.setNewHabitValue}
              newHabitJornada={props.newHabitJornada}
              setNewHabitJornada={props.setNewHabitJornada}
            />
          </Modal>  
        )}
        <CreateHabitButton
          setOpenModal={props.setOpenModal}
          setCurrentDate={props.setCurrentDate}
        />
      </div>

    )
}

export {HomePage};