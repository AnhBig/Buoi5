const DEFAULT_STATE = {
   userList: [
      {
         maSV: 1,
         HoTen: "Nguyễn Văn A",
         SoĐT: 1234567,
         Email: "nguyenvanA@gmail.com",
      },
      {
         maSV: 2,
         HoTen: "Nguyễn Văn b",
         SoĐT: 12554567,
         Email: "nguyenvanb@gmail.com",
      },

   ],
};

export const userReducer = (state = DEFAULT_STATE, action) => {
   const {type, payload} = action;

// đẩy lên STORE
 switch (type) {
   case "ADD_USER": {
      // lone ra 1 mảng neww
      const data = [...state.userList];

      // push lên
      data.push({
         ...payload,
         id: Date.now(),
      });

      //gắn vô
      state.userList = data;

      break;
   }
      
      
 
   default:
      break;
 }


   return {...state};
};