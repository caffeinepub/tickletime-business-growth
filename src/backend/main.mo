import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type InquiryId = Nat;

  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    businessType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.name, inquiry2.name);
    };
  };

  let inquiries = Map.empty<InquiryId, Inquiry>();
  var nextInquiryId = 0;
  let adminPassword = "secureAdminPassword";
  /// Asks for password authentication
  func assertAdmin(password : Text) {
    if (password != adminPassword) {
      Runtime.trap("Authentication failed");
    };
  };

  /// Submits a new inquiry
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, businessType : Text, message : Text) : async InquiryId {
    let inquiryId = nextInquiryId;
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      businessType;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiryId, inquiry);
    nextInquiryId += 1;
    inquiryId;
  };

  /// Retrieves all inquiries (admin only)
  public shared ({ caller }) func getAllContacts(password : Text) : async [Inquiry] {
    assertAdmin(password);
    inquiries.values().toArray().sort();
  };

  /// Retrieves a specific inquiry by ID (admin only)
  public shared ({ caller }) func getInquiryById(password : Text, inquiryId : InquiryId) : async Inquiry {
    assertAdmin(password);
    switch (inquiries.get(inquiryId)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};
