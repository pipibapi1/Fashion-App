# Hệ thống quần áo thời trang trực tuyến La Fashionale
Công nghệ mà nhóm sử dụng bao gồm 
1. ReactJS cho frontend
2. NodeJS + ExpressJS cho backend
3. NoSQL Database (MongoDB) được lưu trên csdl đám mây MongoDB Atlas

## Cài Đặt
Hãy dowload hoặc clone project về máy sau đó việc đầu tiên cần làm là chạy Back-End server trước

### Chạy Back-End 
1. Vào "Backend" folder qua teminal và chạy lệnh ``` npm install ``` để tải node modules trước
2. Để chạy server thì gõ lệnh ``` npm start ``` trên terminal
3. Trên terminal sẽ xuất hiện kết quả là server đang chạy và đã kết nối tới CSDL, lúc này chúng ta đã sẵn sàng chạy frontend


### Front-End

#### Client Front End

Để vào giao diện của khách hàng ta làm các bước sau
1. Vào "FrontEnd" folder thông qua teminal và đi tới "Client" folder chạy dòng lệnh ``` npm install ``` để tải các node modules.
2. Sau đó ta chạy dòng lệnh ``` npm start ``` trên terminal
3. Vì localhost 3000 đang chạy backend nên có thể terminal sẽ hỏi là có muốn chạy trên localhost khác không, ta sẽ chọn có
4. Lúc này giao diện bên phía khách hàng sẽ hiện lên

*Note :
1. Khi muốn thanh toán đơn hàng thì sẽ yêu cầu đăng nhập, người dùng có thể tạo tài khoản mới hoặc dùng tài khoản mà nhóm đã tạo sẵn trong DB  :
username: "customer123"
password: "123"
2. Có thể sẽ xảy ra một số lỗi khi chạy giao diện ở dev mode do mâu thuẫn phiên bản, ... Trong trường hợp đó, nhóm đã deploy giao diện phía khách hàng lên netlify. Người dùng có thể check giao diện khách hàng qua link sau : (lưu ý vẫn phải chạy backend trên terminal ở localhost 3000 do nhóm chưa deploy backend)
https://la-fashionale-main.netlify.app/

#### Clerk Front End

Để vào giao diện của nhân viên ta làm các bước sau
1. Vào "FrontEnd" folder thông qua teminal và đi tới "clerk" folder chạy dòng lệnh ``` npm install ``` để tải các node modules.
2. Sau đó ta chạy dòng lệnh ``` npm start ``` trên terminal
3. Vì localhost 3000 đang chạy backend nên có thể terminal sẽ hỏi là có muốn chạy trên localhost khác không, ta sẽ chọn có
4. Lúc này giao diện bên phía nhân viên sẽ hiện lên

*Note :
1. Khi muốn đăng nhập vào dashboard của nhân viên thì người dùng có thể sử dụng tài khoản sau  :
username: "clerk123"
password: "clerk123"
2. Có thể sẽ xảy ra một số lỗi khi chạy giao diện ở dev mode do mâu thuẫn phiên bản, ... Trong trường hợp đó, nhóm đã deploy giao diện phía nhân viên lên netlify. Người dùng có thể check giao diện nhân viên qua link sau : (lưu ý vẫn phải chạy backend trên terminal ở localhost 3000 do nhóm chưa deploy backend)
https://la-fashionale-clerk-workspace.netlify.app/

#### Manager Front End

Để vào giao diện của quản lý ta làm các bước sau
1. Vào "FrontEnd" folder thông qua teminal và đi tới "manager" folder chạy dòng lệnh ``` npm install ``` để tải các node modules.
2. Sau đó ta chạy dòng lệnh ``` npm start ``` trên terminal
3. Vì localhost 3000 đang chạy backend nên có thể terminal sẽ hỏi là có muốn chạy trên localhost khác không, ta sẽ chọn có
4. Lúc này giao diện bên phía quản lý sẽ hiện lên

*Note :
1. Khi muốn đăng nhập vào dashboard của quản lý thì người dùng có thể sử dụng tài khoản sau  :
username: "admin"
password: "1234"
2. Có thể sẽ xảy ra một số lỗi khi chạy giao diện ở dev mode do mâu thuẫn phiên bản, ... Trong trường hợp đó, nhóm đã deploy giao diện phía quản lý lên netlify. Người dùng có thể check giao diện quản lý qua link sau : (lưu ý vẫn phải chạy backend trên terminal ở localhost 3000 do nhóm chưa deploy backend)
https://la-fashionale-manager-workspace.netlify.app/