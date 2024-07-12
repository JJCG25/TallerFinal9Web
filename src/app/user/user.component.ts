import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedUser: User | undefined; 
  users: any[] = [];
  newUser: User = { 
    first_name:'',
    last_name: '',
    document_type: '',
    document_number: '',
    birth_place: '',
    birth_date: new Date(),
    email: '',
    phone: '',
    username: '',
    password: ''
  };
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error al obtener usuarios', error);
      }
    );
  }

  addUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      data => {
        this.users.push(data);
        this.newUser = {     first_name:'',
          last_name: '',
          document_type: '',
          document_number: '',
          birth_place: '',
          birth_date: new Date(),
          email: '',
          phone: '',
          username: '',
          password: '' }; 
      },
      error => {
        console.error('Error al agregar usuario', error);
      }
    );
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
  }

  saveEditedUser(): void {
    if (this.selectedUser) {
      const userId = this.selectedUser.id; 
  
      this.userService.updateUser(userId,this.selectedUser).subscribe(
        data => {
          this.selectedUser = undefined; 
        },
        error => {
          console.error('Error al actualizar usuario', error);
        }
      );
    } else {
      console.warn('No se ha seleccionado ningún usuario para editar.');
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      data => {

        this.users = this.users.filter(user => user.id !== userId);
      },
      error => {
        console.error('Error al eliminar usuario', error);
      }
    );
  }
}

