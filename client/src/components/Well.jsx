import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 330px;
  margin: 0 auto;
  padding: 14px;
  border: 1px #adadad solid;
  border-radius: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Top = styled(Wrapper)`
  align-items: start;
`

const Title = styled.h3``

const Bottom = styled(Wrapper)`
  align-items: end;
`

const Status = styled.p``

const Well = (props) => {
  return (
    <Item>
      <Top>
        <Title>Скважина №{props.well.id}</Title>
        <button>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 3C9.648 3 10 3.352 10 3.75C10 4.164 9.664 4.5 9.25 4.5C7.745 4.5 1.5 4.5 1.5 4.5V16.5H18.5V7.751C18.5 7.337 18.836 7.001 19.25 7.001C19.664 7.001 20 7.337 20 7.751V17C20 17.621 19.478 18 19 18H1C0.52 18 0 17.621 0 17V4C0 3.519 0.38 3 1 3H9.25ZM10.771 12.689L19.783 3.677C19.916 3.544 20 3.348 20 3.145C20 2.966 19.935 2.782 19.782 2.63L17.359 0.215C17.216 0.0719999 17.026 0 16.837 0C16.648 0 16.459 0.0719999 16.314 0.215L7.287 9.211C6.845 10.582 6.129 12.797 6.023 13.163C5.897 13.596 6.221 13.997 6.595 13.997C7.005 13.997 7.291 13.898 10.771 12.689ZM8.513 10.297L9.683 11.468C8.979 11.7 8.409 11.886 7.954 12.034L8.513 10.297ZM9.481 9.143L16.837 1.812L18.184 3.154L10.838 10.501L9.481 9.143Z" fill="#D9D9D9"/>
          </svg>
        </button>
      </Top>
      <Bottom>
        {props.well.status == "1" ? <Status>рабочая</Status> :
        props.well.status == "2" ? <Status>законсервированная</Status> :
        props.well.status == "3" ? <Status>требуется ремонт</Status> :
        <Status>Неизвестен</Status>
        }
        <button>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.494H0.747C0.334 3.494 0 3.159 0 2.747C0 2.335 0.334 2 0.747 2H6V1C6 0.465 6.474 0 7 0H11C11.526 0 12 0.465 12 1V2H17.254C17.666 2 18 2.335 18 2.747C18 3.159 17.666 3.494 17.254 3.494H17V18.929C17 19.52 16.552 20 16 20C13.127 20 4.873 20 2 20C1.448 20 1 19.52 1 18.929V3.494ZM15.5 3.494H2.5V18.5H15.5V3.494ZM11.25 6C10.836 6 10.5 6.336 10.5 6.75V15.25C10.5 15.664 10.836 16 11.25 16C11.664 16 12 15.664 12 15.25V6.75C12 6.336 11.664 6 11.25 6ZM6.75 6C6.336 6 6 6.336 6 6.75V15.25C6 15.664 6.336 16 6.75 16C7.164 16 7.5 15.664 7.5 15.25V6.75C7.5 6.336 7.164 6 6.75 6ZM10.5 2V1.5H7.5V2H10.5Z" fill="#D9D9D9"/>
          </svg>
        </button>
      </Bottom>
    </Item>
  )
}

export default Well