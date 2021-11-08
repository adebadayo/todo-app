import {Textarea, Button} from "@chakra-ui/react";

export const TodoAdd =  (
  {
    placeholder,
    leftIcon,
    buttonText,
    inputEl,
    handleAddTodoListItem
  }) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}/>

      <Button
        colorScheme="blue"
        leftIcon={leftIcon}
        onClick={handleAddTodoListItem}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  )
}