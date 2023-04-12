import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_modules/member';
import { MembersService } from '../../_services/members.service';
import { ToastrService } from 'ngx-toastr';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member | undefined;
  constructor(
    private memberSerivce: MembersService,
    private toastr: ToastrService,
    public presenceService: PresenceService
  ) {}
  ngOnInit(): void {}
  addLike(member: Member) {
    this.memberSerivce.addLike(member.userName).subscribe({
      next: () =>
        this.toastr.success('you Liked successfully ' + member.knownAs),
    });
  }
}
