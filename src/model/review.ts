import crypto from "crypto";

export class Review {
  private _id: string;
  private _author: string;
  private _title: string;
  private _content: string;

  constructor(author: string, title: string, content: string) {
    const hashEntry: string = author + title + content;
    const id: string = crypto
      .createHash("sha256")
      .update(hashEntry)
      .digest("hex");
    this._id = id;
    this._author = author;
    this._title = title;
    this._content = content;
  }

  public get id(): string {
    return this._id;
  }

  public get author(): string {
    return this._author;
  }

  public get title(): string {
    return this._title;
  }

  public get content(): string {
    return this._content;
  }
}
